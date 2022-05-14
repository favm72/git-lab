import {} from "crypto"

// encode string to base64
export const base64Encode = str => {
	return new Buffer.from(str).toString("base64")
}

// file to preserve
