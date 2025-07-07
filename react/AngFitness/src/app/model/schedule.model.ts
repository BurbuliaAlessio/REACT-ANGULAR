/**
 * Schedule Model Script
 * 
 * This script defines the structure for the schedule model used in fitness classes.
 * 
 * Features:
 * - Represents the schedule details for classes, including the days of the week and the time.
 * - Utilizes the `Weekday` type to strictly enforce valid weekday strings for the `days` property.
 * 
 * @file schedule.model.ts
 * @version 1.0.1
 * @date 2025-01-23
 * @author Alessio Burbulia
 */

import { Weekday } from "./weekday.model";

export interface Schedule {
    days: Weekday[]; // Days of the week the class is held
    time: string;    // Time of the class
}