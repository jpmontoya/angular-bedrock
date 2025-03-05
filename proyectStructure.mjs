// @ts-check

import { createFolderStructure } from "eslint-plugin-project-structure";

export const proyectStructureConfig = createFolderStructure({
    structure: [
        { name: "*" },
        { name: "*", children: [] },

        {
            name: "src",
            children: [
                // src/index.tsx
                // { name: "index.tsx" },

                // { name: "allowAnyFoldersAndFiles", children: [] },

                // {
                //     name: "allowFoldersAndFiles",
                //     children: [
                //         { name: "use{PascalCase}.(ts|tsx)" },
                //         { name: "{camelCase}", children: [{ name: "{snake_case}.json" }] },
                //     ],
                // },

                // src/allowOnlyFolders/FOLDER_NAME/file-name.js
                // src/allowOnlyFolders/FOLDER_NAME/folderName.types.ts
                // {
                //     name: "allowOnlyFolders",
                //     children: [
                //         {
                //             name: "{SNAKE_CASE}",
                //             children: [
                //                 { name: "{kebab-case}.js" },
                //                 { name: "{folderName}.types.ts" },
                //             ],
                //         },
                //     ],
                // },

                // src/allowOnlyFiles/FileName.tsx
                // { name: "allowOnlyFiles", children: [{ name: "{PascalCase}.tsx" }] },
            ],
        },
    ],
});