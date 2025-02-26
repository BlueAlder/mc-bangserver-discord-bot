# Minecraft Server Managment Discord Bot

A simple discord bot built with TypeScript and Discord.js to manage a minecraft server

Currently this only runs a command locally to restart the server.

## Setup

1. Create a Discord Application in the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a Bot for your application
3. Copy your bot token and client ID
4. Update the `.env` file with your token, client id and commands (check example.env)
5. Install dependencies:

   ```bash
   pnpm install
   ```

6. Build the TypeScript code:

   ```bash
   pnpm run build
   ```

7. Deploy slash commands:

   ```bash
   pnpm run deploy
   ```

8. Start the bot:

   ```bash
   pnpm start
   ```

## Development

To run the bot in development mode with auto-restart:

```bash
pnpm run dev
```

## Adding Commands

1. Create a new file in the `src/commands` directory
2. Follow the pattern in `ping.ts` to create a new slash command
3. Rebuild and redeploy commands:

   ```bash
   pnpm run build
   pnpm run deploy
   ```

## Required Permissions

When adding your bot to a server, it needs the following permissions:

- Read Messages/View Channels
- Send Messages
- Use Slash Commands
