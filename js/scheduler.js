function scheduleRevisions(topicId) {
    const now = new Date();
    const intervals = [
        { minutes: 10 },
        { hours: 1 },
        { days: 1 },
        { days: 7 },
        { months: 1 }
    ];

    intervals.forEach(interval => {
        const nextDate = new Date(now);
        
        if(interval.minutes) nextDate.setMinutes(now.getMinutes() + interval.minutes);
        if(interval.hours) nextDate.setHours(now.getHours() + interval.hours);
        if(interval.days) nextDate.setDate(now.getDate() + interval.days);
        if(interval.months) nextDate.setMonth(now.getMonth() + interval.months);

        db.collection('revisions').add({
            topicId,
            userId: auth.currentUser.uid,
            scheduledAt: nextDate,
            completed: false
        });
    });
}
