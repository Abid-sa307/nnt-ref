import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'nnt-ref',

  projectId: 'xxkp03sq',
  dataset: 'production',

  // ✅ Add your deployed hostname here
  studio: {
    hostname: 'nnt-refinery'
  },

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
