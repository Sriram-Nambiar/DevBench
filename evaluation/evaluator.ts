import { exec } from "child_process";
import { readFile } from "fs/promises";

exec(
    "npx vitest run --reporter=json --outputFile=.vitest/json/output.json",
    async () => {
        try {
            const data = await readFile(
                ".vitest/json/output.json",
                "utf-8"
            );

            const result = JSON.parse(data);

            const total = result.numTotalTests;
            const passed = result.numPassedTests;
            const failed = result.numFailedTests;

            const score = total === 0 ? 0 : (passed / total) * 100;

            console.log("Evaluation Result");
            console.log("------------------");
            console.log("Passed:", passed);
            console.log("Failed:", failed);
            console.log("Total:", total);
            console.log("Score:", score);
        } catch (err) {
            console.error("Could not read test results:", err);
        }
    }
);