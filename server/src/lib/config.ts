import { config } from "dotenv"
import path from "path"

config({ path: path.resolve(__dirname, "../../.env") })

export default () => ({
	F_ID: process.env.F_ID,
	F_APP_SECRET: process.env.F_APP_SECRET,
	SESSION_SECRET: process.env.SESSION_SECRET,
	G_CLIENT_ID: process.env.G_CLIENT_ID,
	G_CLIENT_SECRET: process.env.G_CLIENT_SECRET,
	PUBLIC_URL: process.env.PUBLIC_URL,
	PORT: process.env.PORT,
})
