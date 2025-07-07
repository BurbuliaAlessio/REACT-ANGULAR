/**
 * Weekday Model Script
 * 
 * This script defines a strict type representing the days of the week.
 * 
 * Features:
 * - Ensures that only valid weekday strings are used in models.
 * - Designed for reuse in various scheduling-related models.
 * 
 * @file weekday.model.ts
 * @version 1.0.0
 * @date 2025-01-23
 * @author Alessio Burbulia
 */

export type Weekday = 
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";