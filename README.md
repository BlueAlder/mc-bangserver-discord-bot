# Discord Bot

A Discord bot built with TypeScript and Discord.js.

## Setup

1. Create a Discord Application in the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a Bot for your application
3. Copy your bot token and client ID
4. Update the `.env` file with your token and client ID
5. Install dependencies:
   ```
   npm install
   ```
6. Build the TypeScript code:
   ```
   npm run build
   ```
7. Deploy slash commands:
   ```
   npm run deploy
   ```
8. Start the bot:
   ```
   npm start
   ```

## Development

To run the bot in development mode with auto-restart:
```
npm run dev
```

## Adding Commands

1. Create a new file in the `src/commands` directory
2. Follow the pattern in `ping.ts` to create a new slash command
3. Rebuild and redeploy commands:
   ```
   npm run build
   npm run deploy
   ```

## Required Permissions

When adding your bot to a server, it needs the following permissions:
- Read Messages/View Channels
- Send Messages
- Use Slash Commands
- Add Reactions (if your commands use reactions)

## Bot Invite Link

To create an invite link for your bot, go to the OAuth2 URL Generator in the Discord Developer Portal and select the required scopes and permissions.
