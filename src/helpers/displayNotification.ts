import notifee from '@notifee/react-native';

export const onLimitDisplayNotification = async() => {
        
    // Request permissions (required for iOS)
    await notifee.requestPermission()
 
    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    })

    // Display a notification
    await notifee.displayNotification({
      title: 'You have exceeded the limit :(',
      body: 'You have exceeded the limit for adding favorite characters. You must remove another character from favorites.',
      android: {
        channelId,
        smallIcon: '', 
        pressAction: {
          id: 'default',
        },
      },
    })
 }

 