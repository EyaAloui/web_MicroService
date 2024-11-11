package com.example.complaintmanagement.Services;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

@Service
public class BadWordsFilterService {


        @Value("#{'${bad.words}'.split(',')}")
        private List<String> badWords;

        @Value("#{'${bad.phrases}'.split(',')}")
        private List<String> badPhrases;


    // Manually defining the lists of bad words and bad phrases
    /*private List<String> badWords = Arrays.asList(
            "fuck", "suck", "stupid", "idiot", "jerk", "bastard", "dumb", "crap", "hell", "damn",
            "slut", "whore", "imbecile", "Crap", "ccou", "WTF", "wtf", "kill", "balls", "virgin",
            "ISIS", "freak", "fucker", "sucker", "fucking", "screw", "shit"
    );

    private List<String> badPhrases = Arrays.asList(
            "what the fuck", "what the hell", "show u hell", "show you hell", "you are stupid",
            "shut up", "go to hell", "drop dead", "drop-dead", "kill yourself", "go die", "screw you",
            "get lost", "what the hell"
    );*/
        private static final String CENSOR = "****";

        public String censorBadWords(String text) {
            for (String word : badWords) {
                String regex = "(?i)" + word.replaceAll(".", "$0*?");
                Pattern pattern = Pattern.compile(regex);
                Matcher matcher = pattern.matcher(text);
                text = matcher.replaceAll(CENSOR);
            }
            for (String phrase : badPhrases) {
                Pattern pattern = Pattern.compile("(?i)" + Pattern.quote(phrase));
                Matcher matcher = pattern.matcher(text);
                text = matcher.replaceAll(CENSOR);
            }
            return text;
        }

        public boolean containsBadWords(String text) {
            for (String word : badWords) {
                String regex = "(?i)" + word.replaceAll(".", "$0*?");
                Pattern pattern = Pattern.compile(regex);
                Matcher matcher = pattern.matcher(text);
                if (matcher.find()) {
                    return true;
                }
            }
            for (String phrase : badPhrases) {
                Pattern pattern = Pattern.compile("(?i)" + Pattern.quote(phrase));
                Matcher matcher = pattern.matcher(text);
                if (matcher.find()) {
                    return true;
                }
            }
            return false;
        }


}
