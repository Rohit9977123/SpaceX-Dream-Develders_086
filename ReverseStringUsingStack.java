import java.util.Scanner;
import java.util.Stack;

public class ReverseStringUsingStack {

    // Method to reverse a string using a stack
    public static String reverseString(String input) {
        Stack<Character> stack = new Stack<>();

        // Push characters to the stack
        for (char c : input.toCharArray()) {
            stack.push(c);
        }

        // Pop characters from the stack to form the reversed string
        StringBuilder reversed = new StringBuilder();
        while (!stack.isEmpty()) {
            reversed.append(stack.pop());
        }

        return reversed.toString();
    }

    // Main method to test the reverse string functionality
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter a string
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();

        // Reverse the string and display the result
        String reversedString = reverseString(input);
        System.out.println("The reversed string is: " + reversedString);
    }
}
