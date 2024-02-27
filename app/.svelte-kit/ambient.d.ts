
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DATABASE_URL: string;
	export const SUPABASE_AUTH_EXTERNAL_AZURE_SECRET: string;
	export const GIT_COMMITTER_NAME: string;
	export const GITHUB_TOKEN: string;
	export const GITHUB_CODESPACE_TOKEN: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const GIT_EDITOR: string;
	export const NODE_VERSION: string;
	export const HOSTNAME: string;
	export const YARN_VERSION: string;
	export const GIT_ASKPASS: string;
	export const npm_node_execpath: string;
	export const GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN: string;
	export const SHLVL: string;
	export const BROWSER: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM_VERSION: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const npm_package_json: string;
	export const CODESPACES: string;
	export const NVM_SYMLINK_CURRENT: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const GITHUB_USER: string;
	export const GITHUB_GRAPHQL_URL: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const ContainerVersion: string;
	export const GITHUB_API_URL: string;
	export const RepositoryName: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const CLOUDENV_ENVIRONMENT_ID: string;
	export const PROMPT_DIRTRIM: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const SHELL_LOGGED_IN: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const GITHUB_REPOSITORY: string;
	export const TERM_PROGRAM: string;
	export const npm_lifecycle_script: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const GIT_COMMITTER_EMAIL: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const INTERNAL_VSCS_TARGET_URL: string;
	export const npm_execpath: string;
	export const GITHUB_SERVER_URL: string;
	export const NVM_CD_FLAGS: string;
	export const npm_config_global_prefix: string;
	export const npm_command: string;
	export const CODESPACE_NAME: string;
	export const CODESPACE_VSCODE_FOLDER: string;
	export const NVM_RC_VERSION: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_SUPABASE_URL: string;
	export const PUBLIC_SUPABASE_ANON_KEY: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DATABASE_URL: string;
		SUPABASE_AUTH_EXTERNAL_AZURE_SECRET: string;
		GIT_COMMITTER_NAME: string;
		GITHUB_TOKEN: string;
		GITHUB_CODESPACE_TOKEN: string;
		USER: string;
		npm_config_user_agent: string;
		GIT_EDITOR: string;
		NODE_VERSION: string;
		HOSTNAME: string;
		YARN_VERSION: string;
		GIT_ASKPASS: string;
		npm_node_execpath: string;
		GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN: string;
		SHLVL: string;
		BROWSER: string;
		npm_config_noproxy: string;
		HOME: string;
		OLDPWD: string;
		TERM_PROGRAM_VERSION: string;
		VSCODE_IPC_HOOK_CLI: string;
		npm_package_json: string;
		CODESPACES: string;
		NVM_SYMLINK_CURRENT: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		GITHUB_USER: string;
		GITHUB_GRAPHQL_URL: string;
		COLOR: string;
		NVM_DIR: string;
		ContainerVersion: string;
		GITHUB_API_URL: string;
		RepositoryName: string;
		_: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		CLOUDENV_ENVIRONMENT_ID: string;
		PROMPT_DIRTRIM: string;
		TERM: string;
		npm_config_cache: string;
		npm_config_node_gyp: string;
		PATH: string;
		NODE: string;
		npm_package_name: string;
		SHELL_LOGGED_IN: string;
		LANG: string;
		LS_COLORS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		GITHUB_REPOSITORY: string;
		TERM_PROGRAM: string;
		npm_lifecycle_script: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		GIT_COMMITTER_EMAIL: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		INTERNAL_VSCS_TARGET_URL: string;
		npm_execpath: string;
		GITHUB_SERVER_URL: string;
		NVM_CD_FLAGS: string;
		npm_config_global_prefix: string;
		npm_command: string;
		CODESPACE_NAME: string;
		CODESPACE_VSCODE_FOLDER: string;
		NVM_RC_VERSION: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_SUPABASE_URL: string;
		PUBLIC_SUPABASE_ANON_KEY: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
