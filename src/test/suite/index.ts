import * as glob from "glob";
import * as Mocha from "mocha";
import * as path from "path";

export function run(
	cwd: string,
	cb: (error: Error, failures?: number) => void
): void {
	const mocha = new Mocha({
		ui: "tdd",
		useColors: true,
		timeout: 10_000,
	});

	glob("**/**.test.js", { cwd }, (err, files) => {
		if (err) {
			return cb(err);
		}

		files.forEach((f) => mocha.addFile(path.resolve(cwd, f)));

		try {
			mocha.run((failures) => cb(null, failures));
		} catch (err) {
			cb(err);
		}
	});
}
