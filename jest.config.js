module.exports = {
	preset: "@vue/cli-plugin-unit-jest",
	reporters: ["default", "jest-junit"],
	transform: {
	  "^.+\\.vue$": "@vue/vue3-jest",
	},
  };
  