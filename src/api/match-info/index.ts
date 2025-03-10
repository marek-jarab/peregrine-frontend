import { parseDateProps } from '@/utils/parse-date-props'

export interface MatchInfo {
  redAlliance: string[]
  blueAlliance: string[]
  // UTC date - predicted match time
  time?: string
  // example: qm3
  key: string
  redScore?: number
  blueScore?: number
  // UTC date - scheduled match time
  scheduledTime?: string
}

export const processMatch = (match: MatchInfo) =>
  parseDateProps(match, ['time', 'scheduledTime'])

export type ProcessedMatchInfo = ReturnType<typeof processMatch>
