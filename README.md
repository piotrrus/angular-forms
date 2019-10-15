# Angular

## Some ideas how to not repeat your code (keep DRY)

A most common mistakes while creating Angular apps is:
- Lack of component inheritance
- Error field messages in html part of component is a usual string.
- Forms are placed into component

## Lack of component inheritance
Usual components has a lot repeated code. It's common.
Why not to move code, that we use in several component to parrent component?
Example: function providing messages (getErrorMessage) for form fields - has been mmoved to BaseComponent.
Now when we extend our component with the BaseComponent, we can use this function without repeating the code.

## Error field messages
All form field messages used in app has been moved to one error-msg.service.
When we have to change any message, we don't have to change it in every place of our app.
Now it's easy to control that. 

## Forms
- Move your forms to separate class.
- Treat your component as controller in MVC pattern.
  In this case component is just a contener for forms and data provider. And then it looks really nice and clear.
  All fields with validators are placed into form. In situation of dynamic validation we do the same.
- Subscribe status of the form or field and send this information if it necessary up.
- When we use getters in forms class - path to formControl is shorter: paymentForm.name.hasError('error name')
## Validators
When we use pattern validators it's a good idea to place it in one service class. Example: PatternsLibraryService.
We provide pattern with function getPatterns(patternName: string).
Service may cover most popular patterns for numbers, letters, zip, id, currency etc.
