import { defineMarket } from "@/sdk/constants";

export default defineMarket({
  id: `1_0_0x9778047cb8f3740866882a97a186dff42743bebb3ad8010edbf637ab0e37751f`,
  name: `Supply HONEY on Dolomite x Infrared`,
  description: `Supply HONEY into the Dolomite money market on Berachain. This asset will earn lending yield and be eligible for potential Infrared incentives.`,
  is_verified: true,
  category: `boyco`,

  incentive_ids: ["1-0x460f8d9c78b1bde7da137ce75315bd15d34a369b"],

  external_incentives: [
    {
      token_id: "1-0x77d17183055303a15208c809b716dc02261129b7",
      label: "Infrared Points",

      value: async ({ roycoClient, chainClient }) => {
        const value = "1.5x";
        return value;
      },
    },
    {
      token_id: "1-0x460f8d9c78b1bde7da137ce75315bd15d34a369b",
      label: "Dolomite Lending Yield",

      value: async ({ roycoClient, chainClient }) => {
        const value = "Variable Rate";
        return value;
      },
    },
  ],
});
