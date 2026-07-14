import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
	const watcher = vscode.workspace.createFileSystemWatcher("**/*.{lua,luau}");

	watcher.onDidCreate(async (uri) => {
		let fileName = path.basename(uri.fsPath, path.extname(uri.fsPath));
		if (fileName.includes(".server") || fileName.includes(".client")) {
			return;
		}

		if (fileName.toLowerCase() === "init") {
			const parentDir = path.dirname(uri.fsPath);
			fileName = path.basename(parentDir);
		}

		const bytes = await vscode.workspace.fs.readFile(uri);
		const text = Buffer.from(bytes).toString("utf8");

		if (text.trim().length > 0) {
			return;
		}

		// Remove spaces, underscores, and hyphens.
		const variableName = fileName.replace(/[-_\s]/g, "");

		const boilerplate =
			`local ${variableName} = {}

return ${variableName}
`;

		await vscode.workspace.fs.writeFile(
			uri,
			Buffer.from(boilerplate, "utf8")
		);

		vscode.window.showInformationMessage(
			`Added module boilerplate to ${path.basename(uri.fsPath)}`
		);
	});

	context.subscriptions.push(watcher);
}

export function deactivate() { }