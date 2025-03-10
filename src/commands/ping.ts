import { SlashCommandBuilder, CommandInteraction } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!");

export async function execute(interaction: CommandInteraction) {
  const sent = await interaction.reply({
    content: "Pinging...",
    withResponse: true,
  });
  const latency =
    sent.resource!.message!.createdTimestamp - interaction.createdTimestamp;
  await interaction.editReply(
    `Pong! Latency: ${latency}ms. API Latency: ${Math.round(
      interaction.client.ws.ping
    )}ms`
  );
}
