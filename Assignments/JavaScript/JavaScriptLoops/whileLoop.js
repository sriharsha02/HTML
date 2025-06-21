let emails = [
  "user01@example.com",
  "testmail123@mail.com",
  "sample.user@demo.org",
  "noreply001@domain.com",
  "dummy_account@service.net",
];

let i = 0;
while (i < emails.length) {
  console.log(emails[i]);
  i++;
}

let youtubeVideo = [
  {
    video_id: "vid101",
    title: "React Tutorial for Beginners",
    channel: "TechWorld",
    views: "1.1M",
    likes: 58000,
    upload_date: "2024-11-20",
    duration: "45:30",
    thumbnail: "https://dummyimage.com/320x180/000/fff&text=React+Basics",
  },
  {
    video_id: "vid102",
    title: "How to Start a YouTube Channel in 2025",
    channel: "Creator Hacks",
    views: "450K",
    likes: 23000,
    upload_date: "2025-03-12",
    duration: "18:12",
    thumbnail: "https://dummyimage.com/320x180/000/fff&text=YouTube+Guide",
  },
  {
    video_id: "vid103",
    title: "Top 10 VS Code Extensions",
    channel: "Code Boost",
    views: "875K",
    likes: 42000,
    upload_date: "2025-01-03",
    duration: "22:47",
    thumbnail: "https://dummyimage.com/320x180/000/fff&text=VS+Code+Tips",
  },
];

let j = 0;

while (j < youtubeVideo.length) {
  console.log(youtubeVideo[j].title);
  j++;
}
