import { Ragie } from "ragie";
import OpenAI from "openai";

const apiKey = process.env.RAGIE_API_KEY;

if (!apiKey) {
    console.error("Error: RAGIE_API_KEY environment variable not set.");
    process.exit(1);
}

const ragie = new Ragie({
    auth: apiKey
});

const [, , operation, ...rawArgs] = process.argv;

function parseArgs(args) {
    const params = {};
    for (let i = 0; i < args.length; i++) {
        const eqMatch = args[i].match(/^--([^=]+)=(.*)$/);
        if (eqMatch) {
            params[eqMatch[1]] = eqMatch[2];
        } else if (args[i].startsWith('--')) {
            const key = args[i].slice(2);
            const value = args[i + 1];
            if (value && !value.startsWith('--')) {
                params[key] = value;
                i++;
            } else {
                params[key] = true;
            }
        }
    }
    return params;
}

const params = parseArgs(rawArgs);

if (!operation) {
    console.log("Usage:");
    console.log("  node index.js retrieve-chunks --query=<query>");
    console.log("  node index.js generate --query=<query>");
    process.exit(1);
}

(async () => {
    
})();