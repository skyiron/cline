import { Empty, StringRequest } from "@/shared/proto/common"
import * as vscode from "vscode"

export async function openExternal(request: StringRequest): Promise<Empty> {
	try {
		if (request.value) {
			await vscode.env.openExternal(vscode.Uri.parse(request.value))
		}
		return Empty.create()
	} catch (error) {
		console.error("Error opening external URL:", error)
		return Empty.create()
	}
}
