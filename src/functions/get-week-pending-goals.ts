import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { db } from "../db";
import { and, lte, sql } from "drizzle-orm";
import { goals } from "../db/schema";
// import { title } from "process";

dayjs.extend(weekOfYear)

export function getWeekPendingGoals() {
    const lastDayOfWeek = dayjs().endOf('week').toDate()

    const goalsCreatedUpToWeek = db.$with('goals_created_up_to_week').as(
        db.select({
            id: goals.id,
            title: goals.title,
            desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
            createdAt: goals.createdAt,
        })
        .from(goals).where(lte(goals.createdAt, lastDayOfWeek))
        
    )
}