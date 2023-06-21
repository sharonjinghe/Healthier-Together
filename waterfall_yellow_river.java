/****************************************** Healthier Together.java ************************************************/

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class HealthierTogether {

    ArrayList<String> topics; 

    public static void main(String[] args) { 

        // Create a topics list to store the different topics
        ArrayList<String> topics = new ArrayList<>();
        topics.add("Nutrition"); 
        topics.add("Exercise");
        topics.add("Massage Therapy");
        topics.add("Yoga");

        // Create a Map of tips to store the tips associated with each topic
        Map<String,String> tips = new HashMap<>();
        tips.put("Nutrition", "Eat more plant-based foods");
        tips.put("Exercise", "Exercise 30 minutes a day");
        tips.put("Massage Therapy", "Get a weekly massage");
        tips.put("Yoga", "Practice yoga 3 times a week");

        // Print out the different topics
        System.out.println("Topics:");
        topics.forEach(topic -> System.out.println("- " + topic));

        // Print out the tips associated with each topic
        System.out.println("\nTips:");
        topics.forEach(topic -> System.out.println("- " + topic + ": " + tips.get(topic)));
    }

}