# Angular

## Some ideas how to not repeat your code (keep DRY) with examples

A most common mistakes while creating Angular apps is:
- Lack of component inheritance - we repeat the code.
- Error field messages in html part of component is a usual string.
- Forms are separated classes, embedded into form component.

## Lack of component inheritance
Usual components has a lot repeated code. It's common.
Why not to move code, that we use in several component to parrent component?
Example: function providing messages (getErrorMessage) for form fields - has been moved to BaseComponent.
Now when we extend our component with the BaseComponent, and can use getErrorMessage function without repeating the code.

## Error field messages
All form field messages used in app has been moved to one error-msg.service.
When we have to change any message, we don't have to change it in every place of our app.
Now it's easy to control all messages. 

## Forms
- Move your forms to separate class.
- Form classes are extended from BaseForm, that covers some common code for forms. 
- Subscribe status of the form component or field and emit this information if it necessary up.
- When we use getters in forms class - path to formControl is shorter: paymentForm.name.hasError('error name')

## Patterns Validators
When we use pattern validators it's a good idea to place it in one service class. Example: PatternsLibraryService.
We provide pattern with function getPatterns(patternName: string).
Service may cover most popular patterns for numbers, letters, zip, id, currency etc.
