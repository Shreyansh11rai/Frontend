<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Project overview

This is a landing/marketing website for digital service rendering business, It'll have all the possible SEO setup for the pages it has, make it responsive for all devices and specially for mobile devices, everything should be properly functional and visible follow google's material UI standards. This site is configured for SSG, and static hosting.

## Folder structure

Follow feature based folder structure, and strictly typed functions and components. Maintain a clear separation view, data, api, config, utils, service, library, for a scalable project right now every data will be locally available by database files and in future API's will be integrated for the dynamic data. Keep all global brand related data in single data file to change at once if needed. Comment the logics and tsx sufficiently to be understandable, keep a structured and unified contract between layers. Use ./src/app only for routing to components and layouts mounting nothing else keep it clean. Inside components create folders by routes. For services

## Naming convention

Follow PascalCase for components and kebab-case for ts files, suffix utils files with - .util, provider - .prov, public files - kebab-case, data files - snake_case, project env, config, and constants - UPPER_CASE.

## View or presentation

Follow a component based architecture and reusability, keep the website spacious website's view will be modern and professional. follow zoho style layout, Use sans serif font theme will be available to modify from single CSS file, do not use inline css, try not to use any random color to style. Before using any class that can be in theme, add it to CSS file than use it. Place meaningful CTAs where required.

<!-- END:nextjs-agent-rules -->
