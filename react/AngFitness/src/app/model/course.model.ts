/**
 * Fitness Class Model Script
 * 
 * This script defines the structure and data model for managing fitness classes.
 * 
 * Features:
 * - Represents fitness class details, including name, description, duration, level, [schedule], and subscription status.
 * - Includes an array of sample fitness classes for demonstration purposes.
 * - Provides a foundation for managing class data in an application.
 * 
 * @file fitness-class.model.ts
 * @version 1.0.0
 * @date 2025-01-23
 * @author Alessio Burbulia
 */

import { Schedule } from "./schedule.model";

export interface Course {
    id: string;
    name: string;
    description: string;
    duration: string;
    level: string;
    schedule: Schedule;
    isSubscribed: boolean;
    price: string;
    image: string;
    instructor: string;
    maxCapacity: string;
    actualSubscribed: string;
  }