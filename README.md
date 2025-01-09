# Angular Forms

## Some ideas how to create forms according to some OOP rules

A most common mistakes while creating Angular apps are:
- We repeat the code.
- Error field messages in html part of component is a usual string placed directly into html file.
- Forms fields definitions are often placed into component.

## OOP rules
Forms are one of most used Angular functionality. Often placed in other components, mixed with form class declaration.
According to DRY, and Single Responsibility rule i prefer to divide form component into form declaration class and form component.
Some common function for form component has been move to Base Form Abstract Class - in this case function providing messages (getErrorMessage) for form fields 
and checkFormAndEmit for emmiting form values and validation.
Now when we extend our component with the BaseComponent, and we can use getErrorMessage function without repeating the code.

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
