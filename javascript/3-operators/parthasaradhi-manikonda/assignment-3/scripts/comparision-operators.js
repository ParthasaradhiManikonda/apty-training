
    function getConvertedValues() {
      const v1 = document.getElementById("value1").value;
      const v2 = document.getElementById("value2").value;
      const t1 = document.getElementById("type1").value;
      const t2 = document.getElementById("type2").value;

      return [convert(v1, t1), convert(v2, t2)];
    }

    function convert(value, type) {
      switch (type) {
        case "number": return Number(value);
        case "boolean": return value.toLowerCase() === "true";
        default: return String(value);
      }
    }

    function compareEqual() {
      const [a, b] = getConvertedValues();
      document.getElementById("result").textContent = `${a} == ${b} → ${a == b}`;
    }

    function compareStrictEqual() {
      const [a, b] = getConvertedValues();
      document.getElementById("result").textContent = `${a} === ${b} → ${a === b}`;
    }

    function compareNotEqual() {
      const [a, b] = getConvertedValues();
      document.getElementById("result").textContent = `${a} != ${b} → ${a != b}`;
    }

    function compareStrictNotEqual() {
      const [a, b] = getConvertedValues();
      document.getElementById("result").textContent = `${a} !== ${b} → ${a !== b}`;
    }

    function compareGreater() {
      const [a, b] = getConvertedValues();
      document.getElementById("result").textContent = `${a} > ${b} → ${a > b}`;
    }

    function compareLess() {
      const [a, b] = getConvertedValues();
      document.getElementById("result").textContent = `${a} < ${b} → ${a < b}`;
    }

    function compareGreaterEqual() {
      const [a, b] = getConvertedValues();
      document.getElementById("result").textContent = `${a} >= ${b} → ${a >= b}`;
    }

    function compareLessEqual() {
      const [a, b] = getConvertedValues();
      document.getElementById("result").textContent = `${a} <= ${b} → ${a <= b}`;
    }
