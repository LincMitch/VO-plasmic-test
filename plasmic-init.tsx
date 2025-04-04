import { initPlasmicLoader } from "@plasmicapp/loader-nextjs"

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "tfj8F12EkyyhMpoDStNjtL",  // ID of a project you are using
      token: "8RpuHrt71zQ3ZlJSpbvtQST6HaKCgDktgOlVOSXho7WEJGd1Yy2WUUBtfYWs4nC9C0pA3p6EA1KqBUe4Y9V6g"  // API token for that project
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
})

