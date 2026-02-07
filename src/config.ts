import type {
	ExpressiveCodeConfig,
	GitHubEditConfig,
	ImageFallbackConfig,
	LicenseConfig,
	NavBarConfig,
	NoticeConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const noticeConfig: NoticeConfig = {
	enable: false,
	level: "happy",
	content: "欢迎来到我的技术站！",
};

export const siteConfig: SiteConfig = {
	title: "EasonYin",
	subtitle: "记录学习与成长",
	description:
		"一个分享技术与学习的个人博客",

	keywords: [],
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 200, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
		forceDarkMode: false, // Force dark mode and hide theme switcher
	},
	banner: {
		enable: false,
		src: "/banner.avif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'

		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed

			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	background: {
		enable: true, // Enable background image
		src: "/random/h", // Background image URL (supports HTTPS)
		position: "center", // Background position: 'top', 'center', 'bottom'
		size: "cover", // Background size: 'cover', 'contain', 'auto'
		repeat: "no-repeat", // Background repeat: 'no-repeat', 'repeat', 'repeat-x', 'repeat-y'
		attachment: "fixed", // Background attachment: 'fixed', 'scroll', 'local'
		opacity: 1, // Background opacity (0-1)
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0", // Path of the favicon, relative to the /public directory
			//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
	officialSites: [
		{ url: "https://yourname.com", alias: "Blog" },
	],
	server: [
		{ url: "", text: "Blog" },
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "关于",
			url: "https://space.bilibili.com/606348531", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{
			name: "聊天",
			url: "https://discord.gg/SWCw9AC6",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://avatars.githubusercontent.com/u/148100?v=4", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "EasonYin",
	bio: "",
	links: [
		{
			name: "GitHub",
			icon: "github", // Local icon
			url: "https://github.com/nameefef",
		},
		{
			name: "B站",
			icon: "bilibili", // Local icon
			url: "https://space.bilibili.com/60634853",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const imageFallbackConfig: ImageFallbackConfig = {
	enable: false,
	originalDomain: "https://eopfapi.acofork.com/pic?img=ua",
	fallbackDomain: "https://eopfapi.acofork.com/pic?img=ua",
};

export const umamiConfig: UmamiConfig = {
	enable: true,
	baseUrl: "https://u.2x.nz",
	shareId: "CdkXbGgZr6ECKOyK",
	timezone: "Asia/Shanghai",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};

export const gitHubEditConfig: GitHubEditConfig = {
	enable: false,
	baseUrl: "https://github.com/yourname/fuwari-blog/blob/main/src/content/posts",
};

// todoConfig removed from here
