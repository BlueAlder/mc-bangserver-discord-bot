import { exec } from "child_process";
import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("restart-server")
  .setDescription("Restarts the server.");

const restartCommand = process.env.RESTART_COMMAND || "docker compose restart";
const restartCommandOptions = { cwd: process.env.COMMAND_CWD };

export async function execute(interaction: CommandInteraction) {
  await interaction.reply({
    content: "Restarting the server...",
  });

  exec(restartCommand, restartCommandOptions, async (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      await interaction.editReply(
        "An error occurred while restarting the server."
      );
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      await interaction.editReply(
        "An error occurred while restarting the server."
      );
      return;
    }
    console.log(`stdout: ${stdout}`);
    await interaction.editReply("Server restarted successfully.");
  });
}
