//Healthier Together - Typescript

//Imports
import { HealthScore, HealthCheck } from 'HealthierTogether';

//Health Score Class
export class HealthScore {
    private healthScore: number; 

    constructor(score: number) {
        this.healthScore = score;
    }

    getScore(): number {
        return this.healthScore;
    }

    setHealthScore(score: number) {
        this.healthScore = score; 
    }
}

//Health Check Class
export class HealthCheck {
    private healthChecks: string[] = []; 

    constructor(checks: string[]) {
        this.healthChecks = checks;
    }

    getChecks(): string[] {
        return this.healthChecks; 
    }

    addCheck(check: string) {
        this.healthChecks.push(check);
    }

    removeCheck(check: string) {
        const index = this.healthChecks.indexOf(check);
        if (index > -1) {
            this.healthChecks.splice(index, 1);
        }
    }
}

//Health Score Map
export class HealthScoreMap {
    private healthScores: Map<string, HealthScore> = new Map<string, HealthScore>(); 

    constructor(scores: HealthScore[]) {
        scores.forEach(score => {
            this.addHealthScore(score);
        });
    }

    getScores(): Map<string, HealthScore> {
        return this.healthScores;
    }

    addHealthScore(score: HealthScore) {
        const { healthScore } = score;
        const id: string = healthScore.toString();
        this.healthScores.set(id, score);
    }

    removeHealthScore(score: HealthScore) {
        const { healthScore } = score;
        const id: string = healthScore.toString();
        this.healthScores.delete(id);
    }

    maxScore(): HealthScore {
        let maxScore: HealthScore;
        this.healthScores.forEach((score: HealthScore) => {
            if (!maxScore || score.getScore() > maxScore.getScore()) {
                maxScore = score;
            }
        });
        return maxScore;
    }
}

//Health Manager
export class HealthManager {
    private healthScoreMap: HealthScoreMap;
    private healthCheck: HealthCheck;

    constructor(scoreMap: HealthScoreMap, check: HealthCheck) {
        this.healthScoreMap = scoreMap;
        this.healthCheck = check;
    }

    getHealthScoreMap(): HealthScoreMap {
        return this.healthScoreMap;
    }

    getHealthCheck(): HealthCheck {
        return this.healthCheck;
    }

    addHealthScore(score: HealthScore) {
        this.healthScoreMap.addHealthScore(score);
    }

    removeHealthScore(score: HealthScore) {
        this.healthScoreMap.removeHealthScore(score);
    }

    addCheck(check: string) {
        this.healthCheck.addCheck(check);
    }

    removeCheck(check: string) {
        this.healthCheck.removeCheck(check);
    }

    getMaxScore(): HealthScore {
        return this.healthScoreMap.maxScore();
    }
}