import { Controller } from ".."
import { Empty, StringRequest } from "../../../shared/proto/common"
import { getHostBridgeProvider } from "@hosts/host-providers"

/**
 * Opens a URL in the user's default browser
 * @param controller The controller instance
 * @param request The URL to open
 * @returns Empty response since the client doesn't need a return value
 */
export async function openInBrowser(controller: Controller, request: StringRequest): Promise<Empty> {
	try {
		if (request.value) {
			const hostBridge = getHostBridgeProvider()
			await hostBridge.envClient.openExternal(request)
		}
		return Empty.create()
	} catch (error) {
		console.error("Error opening URL in browser:", error)
		return Empty.create()
	}
}
