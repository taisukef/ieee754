const t = {
    ok(b) {
        if (!b) {
            throw "not correct!";
        }
    },
    equal(n1, n2) {
        if (n1 != n2) {
            throw "not match!";
        }
    },
    end() {
        console.log(".. ok!");
    },
};

const test = (name, func) => {
    console.log(name);
    func(t);
};

export { test };
