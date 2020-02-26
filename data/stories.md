## add friends
* greet
  - utter_greet

## add friends
* add_friends
  - utter_add_friends
  - utter_did_it_help
> check_did_it_help

## add media
* add_media
  - utter_add_media
  - utter_did_it_help
> check_did_it_help

## audio in calls
* audio_in_calls
  - utter_audio_in_calls
  - utter_did_it_help
> check_did_it_help

## audio, audio in calls
* audio
  - utter_audio
* audio_in_calls
  - utter_audio_in_calls
  - utter_did_it_help
> check_did_it_help

## audio in media
* audio_in_media
  - utter_audio_in_media
  - utter_did_it_help
> check_did_it_help

## audio, audio in media
* audio
  - utter_audio
* audio_in_media
  - utter_audio_in_media
  - utter_did_it_help
> check_did_it_help

## audio in media
* audio_in_media
  - utter_audio_in_media
  - utter_did_it_help
> check_did_it_help

## block user
* block_user
  - utter_block_user
  - utter_did_it_help
> check_did_it_help

## report bug
* report_bug
  - utter_human_take_care
  - utter_did_it_help
> check_did_it_help

## schedule call
* schedule_call
  - utter_schedule_call
  - utter_did_it_help
> check_did_it_help

## schedule, schedule call
* schedule
  - utter_schedule
* schedule_call
  - utter_schedule_call
  - utter_did_it_help
> check_did_it_help

## view scheduled calls
* view_scheduled_calls
  - utter_view_scheduled_calls
  - utter_did_it_help
> check_did_it_help

## schedule, view scheduled calls
* schedule
  - utter_schedule
* view_scheduled_calls
  - utter_view_scheduled_calls
  - utter_did_it_help
> check_did_it_help

## start call
* start_call
  - utter_start_call
  - utter_did_it_help
> check_did_it_help

## missed calls
* missed_calls
  - utter_missed_calls
  - utter_did_it_help
> check_did_it_help

## change video in channel
* change_video_in_channel
  - utter_change_video_in_channel
  - utter_did_it_help
> check_did_it_help

## delete account
* delete_account
  - utter_delete_account
  - utter_did_it_help
> check_did_it_help

## desktop app
* desktop_app
  - utter_desktop_app
  - utter_did_it_help
> check_did_it_help

## email verification
* email_verification
  - utter_email_verification
  - utter_did_it_help
> check_did_it_help

## email, email verification
* email
  - utter_email
* email_verification
  - utter_email_verification
  - utter_did_it_help
> check_did_it_help

## email switch
* email_switch
  - utter_email_switch
  - utter_did_it_help
> check_did_it_help

## email, email switch
* email
  - utter_email
* email_switch
  - utter_email_switch
  - utter_did_it_help
> check_did_it_help

## end call
* end_call
  - utter_end_call
  - utter_did_it_help
> check_did_it_help

## did it help - successful
> check_did_it_help
* affirm
  - utter_glad_to_help

## did it help - unsuccessful, bye
> check_did_it_help
* deny
  - utter_did_not_help
* deny
  - utter_bye

## did it help - unsuccessful, ask support
> check_did_it_help
* deny
  - utter_did_not_help
* affirm OR talk_to_support
  - utter_talk_to_support

## add friends - unsuccessful, more option
> check_did_it_help
* deny
  - utter_did_not_help
* more_options
  - utter_talk_to_support
