(function () {
    "use strict";

    function splitTableCells(line) {
        if (!/^\|.+\|$/u.test(line)) {
            return null;
        }

        return line
            .replace(/^\|/u, "")
            .replace(/\|$/u, "")
            .split("|")
            .map(function (cell) {
                return cell.trim();
            });
    }

    function isMemoryTableHeader(cells) {
        return cells.length >= 3 &&
            cells[0].replace(/\s+/gu, "") === "단어" &&
            cells[1].replace(/\s+/gu, "") === "의미" &&
            cells[2].replace(/\s+/gu, "") === "도해";
    }

    function isTableSeparator(cells) {
        return cells.length >= 3 && cells.every(function (cell) {
            return /^:?-{3,}:?$/u.test(cell) || cell === "";
        });
    }

    function extractIllustrationValue(rawValue) {
        var value = String(rawValue || "").trim();
        var imageMatch;
        var htmlImageMatch;

        if (!value || value === "-") {
            return "";
        }

        htmlImageMatch = value.match(/<img\b[^>]*\bsrc=["'](.+?)["'][^>]*>/iu);
        if (htmlImageMatch) {
            return htmlImageMatch[1].trim();
        }

        imageMatch = value.match(/!\[[^\]]*\]\((.+?)\)/u);
        if (imageMatch) {
            return imageMatch[1].trim();
        }

        return value;
    }

    function parse(markdown) {
        var lines = String(markdown || "").split(/\r?\n/);
        var result = {
            title: "",
            subject: "",
            category: "",
            tags: [],
            priority: 5,
            intervalSeconds: 3,
            items: []
        };
        var hasMemoryTable = false;

        lines.forEach(function (rawLine, index) {
            var line = rawLine.trim();
            var match;
            var cells;

            if (!line) {
                return;
            }

            if (/^#\s+/u.test(line)) {
                return;
            }

            match = line.match(/^@title:\s*(.+?)\s*$/u);
            if (match) {
                result.title = match[1];
                return;
            }

            match = line.match(/^@subject:\s*(.+?)\s*$/u);
            if (match) {
                result.subject = match[1];
                return;
            }

            match = line.match(/^@category:\s*(.+?)\s*$/u);
            if (match) {
                result.category = match[1];
                return;
            }

            match = line.match(/^@tags:\s*(.+?)\s*$/u);
            if (match) {
                result.tags = match[1].split(",").map(function (tag) {
                    return tag.trim();
                }).filter(Boolean);
                return;
            }

            match = line.match(/^@priority:\s*(\d+)\s*$/u);
            if (match) {
                result.priority = Math.max(1, Math.min(10, Number(match[1]) || 5));
                return;
            }

            match = line.match(/^@interval:\s*(\d+(?:\.\d+)?)\s*$/u);
            if (match) {
                result.intervalSeconds = Math.max(1, Number(match[1]) || 3);
                return;
            }

            cells = splitTableCells(line);
            if (cells) {
                if (isMemoryTableHeader(cells)) {
                    hasMemoryTable = true;
                    return;
                }

                if (hasMemoryTable && isTableSeparator(cells)) {
                    return;
                }

                if (hasMemoryTable) {
                    if (!cells[0] || !cells[1]) {
                        console.warn("[memory-parser] 빈 셀이 있는 표 행을 무시합니다:", line, "line:", index + 1);
                        return;
                    }

                    result.items.push({
                        id: "item-" + index,
                        front: cells[0],
                        back: cells[1],
                        illustration: extractIllustrationValue(cells[2])
                    });
                    return;
                }
            }

            match = line.match(/^-\s*(.+?)\s*\|\s*(.+?)\s*$/u);
            if (match) {
                result.items.push({
                    id: "item-" + index,
                    front: match[1],
                    back: match[2],
                    illustration: ""
                });
                return;
            }

            console.warn("[memory-parser] 형식이 잘못된 줄을 무시합니다:", line, "line:", index + 1);
        });

        return result;
    }

    window.MemoryDeckParser = {
        parse: parse
    };
})();
