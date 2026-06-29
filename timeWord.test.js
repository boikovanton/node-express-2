const timeWord = require("./timeWord");

describe("#timeWord", function () {
  test("handles midnight", function () {
    expect(timeWord("00:00")).toBe("midnight");
  });

  test("handles minutes after midnight", function () {
    expect(timeWord("00:12")).toBe("twelve twelve am");
  });

  test("handles exact hour in the morning", function () {
    expect(timeWord("01:00")).toBe("one o’clock am");
  });

  test("handles single-digit minutes", function () {
    expect(timeWord("06:01")).toBe("six oh one am");
  });

  test("handles ten minutes", function () {
    expect(timeWord("06:10")).toBe("six ten am");
  });

  test("handles teen minutes", function () {
    expect(timeWord("06:18")).toBe("six eighteen am");
  });

  test("handles thirty minutes", function () {
    expect(timeWord("06:30")).toBe("six thirty am");
  });

  test("handles compound minutes", function () {
    expect(timeWord("10:34")).toBe("ten thirty four am");
  });

  test("handles noon", function () {
    expect(timeWord("12:00")).toBe("noon");
  });

  test("handles minutes after noon", function () {
    expect(timeWord("12:09")).toBe("twelve oh nine pm");
  });

  test("handles evening time", function () {
    expect(timeWord("23:23")).toBe("eleven twenty three pm");
  });
});