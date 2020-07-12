MVP Expected User Flow:
User starts onboarding.
At end of survey, stores user data and sends an email verification request.
At email verification, updates user data and sends email/SMS to invited friend.
At email/SMS invite, send user time data.
At end of time survey, finalizes user data and stores in confirmed table.
MVP Expected Request Flow:
Onboarding Survey Data -> Register
Email Link Request -> VerifyEmail
Invite Link Request -> ConfirmInvite
Confirm Time Request -> ConfirmTime
MVP Expected Response Tasks
Register
Store onboarding data.
Generate email verification JWT.
Send email verification link in email with SendGrid.
Return 201.
VerifyEmail
Confirm email in onboarding data.
Generate invite JWT.
Send invite token in email with SendGrid and in SMS with Twilio to invitee.
Return 201.
ConfirmInvite
Confirm email in friend data.
Get User 1 name and preferred times.
Return name and preferred times.
ConfirmTime
Write in all needed onboarding data.
Notify inviter with email and SMS about upcoming time.
Notify invitee with email and SMS about upcoming time.
Return 201.
Backend Technical Tasks
Store user data.
Store time in UTC but provide timezone for conversion.
Generate and store random string keys.
Send an email through Sendgrid.
Send a SMS through Twilio.