import type { Tag } from '@/types/tag.ts'

export type Suggestion = {
  id: string
  title: string
  description: string
  tags: Tag[]
  author?: string
  votes: number
  createdAt: Date
}