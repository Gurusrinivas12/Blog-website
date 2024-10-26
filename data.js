export const blogPosts = [
  {
    id: 0,
    title: "Code Shift: When Legacy Systems Take a Turn",
    date: "Jul 12 2023",
    views: 0,
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQEmOwI943hqNA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698664755230?e=1735171200&v=beta&t=Ul8ZvmX21MxSSBM9dOpAtXDLSA11kRR00PAwTa5Zjaw",
    description:
      "'Code Shift: When Legacy Systems Take a Turn' delves into the challenges and transformations that come with updating legacy systems in tech. Legacy systems—often reliable but outdated—run critical operations for industries ranging from finance to healthcare. Yet, as technology advances, these systems face pressure to adapt, either to meet new security standards, handle more data, or integrate with modern applications. Transitioning a legacy system is no small feat; it requires balancing the need for innovation with the risk of disrupting business operations. This code shift can involve anything from updating outdated codebases to migrating data or completely overhauling architectures. Developers, architects, and managers must work together to carefully manage these shifts, ensuring that new functionality is introduced without compromising existing stability. Successfully navigating a legacy system transformation can breathe new life into old software, extending its utility while aligning it with the demands of today’s tech-driven world.",
      comments: [
        { user: "Alice", date: "Oct 10 2023", content: "Great insights on legacy systems!" },
        { user: "Bob", date: "Oct 12 2023", content: "I found this very informative." }
      ]
    
  },
  {
    id: 1,
    title: "The Power of Secrets: Encryption in Modern Web Development",
    date: "May 28 2023",
    views: 0,
    image: "https://network-programming.org/assets/img/news-icon.png",
    description:
      "'The Power of Secrets: Encryption in Modern Web Development' highlights the critical role that encryption plays in keeping data safe and secure in today's digital landscape. Encryption is the backbone of secure web communication, transforming sensitive information—like passwords, payment details, and personal data—into unreadable code that can only be deciphered by authorized parties. In an era where cyber threats and data breaches are increasingly common, encryption stands as a powerful guardian, ensuring privacy and trust between users and websites. Modern web developers rely on encryption protocols like SSL/TLS, hashing algorithms, and asymmetric encryption to protect data during transmission and storage. Beyond its technical aspects, encryption fosters confidence in online interactions, allowing users to safely navigate, transact, and share information across the web. This invisible layer of security is essential, transforming the web into a trusted space for users worldwide.",
      comments: [
        { user: "Charlie", date: "Sep 20 2023", content: "Thanks for the encryption tips!" },
        { user: "Eva", date: "Sep 21 2023", content: "This is so helpful for secure coding!" },
      ]
  },
  {
    id: 2,
    title: "Power Struggles in Coding: Debugging and Resolving Conflicts",
    date: "Sep 1 2023",
    views: 0,
    image:
      "https://s3.amazonaws.com/abn-prod/wp-content/uploads/sites/3/2022/09/Scripps-News-logo-862x485.jpg",
    description:
      "'Power Struggles in Coding: Debugging and Resolving Conflicts' explores the unique battles that developers face when their code doesn’t go as planned. Every coder encounters moments when logic fails, variables misbehave, or unexpected bugs surface, creating a conflict between what they intended and what the program actually does. This struggle is more than just a technical hurdle—it’s a challenge to one’s problem-solving skills, patience, and determination. Debugging is akin to detective work, requiring a meticulous eye to trace errors and a willingness to dive deep into documentation, code libraries, or even the codebase itself to uncover hidden issues. This process can be frustrating and rewarding in equal measure, as each bug resolved brings a new layer of understanding and control over the code. Developers often emerge from these power struggles with a stronger grasp of both the language they’re working in and their own approach to problem-solving. Debugging, while demanding, is ultimately an empowering experience that reinforces resilience and adaptability in coding.",
      comments: [
        { user: "Sophia", date: "Sep 10 2023", content: "Debugging is my daily struggle; loved this post!" },
        { user: "Lucas", date: "Sep 12 2023", content: "Great advice on conflict resolution in code." },
        { user: "Emma", date: "Sep 15 2023", content: "This post helped me solve a tricky bug!" }
      ]  
  },
  {
    id: 3,
    title: "Empowering Dev Teams: The Collective Strength of Collaboration",
    date: "Jun 10 2023",
    views: 0,
    image: "https://prod.wp.cdn.aws.wfu.edu/sites/22/2013/08/computercamp.jpg",
    description:
      "'Empowering Dev Teams: The Collective Strength of Collaboration' emphasizes how teamwork transforms the development process, turning individual efforts into powerful, collective achievements. In the fast-paced world of software development, where projects are complex and deadlines tight, collaboration is a vital tool that enables dev teams to bring diverse perspectives and expertise to the table. By sharing knowledge, dividing tasks based on strengths, and solving problems together, developers can overcome challenges more effectively and innovate faster. Tools like version control, agile practices, and code review processes foster a collaborative environment that keeps everyone aligned, ensuring high-quality code and minimizing bottlenecks. Beyond technical advantages, collaboration builds a sense of camaraderie and mutual respect, empowering teams to tackle ambitious projects confidently. When dev teams leverage the collective strength of collaboration, they don’t just build software—they build a culture of shared success and continuous growth.",
      comments: [
        { user: "Jack", date: "Jun 12 2023", content: "Collaboration is key in development!" },
        { user: "Olivia", date: "Jun 14 2023", content: "I have seen how teamwork can boost project success." },
        { user: "Ava", date: "Jun 16 2023", content: "This article really highlights the importance of teamwork." }
      ]
  },
  {
    id: 4,
    title: "The Future of Programming: Navigating Paradigm Shifts in Tech",
    date: "Feb 19 2023",
    views: 0,
    image:
      "https://s16458.pcdn.co/wp-content/uploads/2022/09/A527_TOP-Programming-Blogs-News-Accounts-on-Twitter.jpg",
    description:
      "'The Future of Programming: Navigating Paradigm Shifts in Tech' explores the evolving landscape of software development as new paradigms reshape how we approach code and solve problems. Programming has always been influenced by advancements in technology and shifts in computing needs, but today, the pace of change is faster than ever. From the rise of functional and declarative programming to the integration of AI-driven development and quantum computing, each shift challenges developers to adapt, learn new approaches, and think critically about problem-solving. These paradigms bring fresh perspectives on scalability, efficiency, and user-centric design, influencing everything from the languages we use to the architecture of our applications. Navigating these shifts requires not only technical skill but also an openness to continuous learning and flexibility. As the tech industry moves forward, developers who embrace these paradigm changes will be at the forefront, shaping the future of software and driving innovation in an increasingly dynamic digital world.",
      comments: [
        { user: "Liam", date: "Feb 20 2023", content: "Interesting take on the future of tech!" },
        { user: "Sophia", date: "Feb 21 2023", content: "This got me excited about what's next in programming!" },
        { user: "Henry", date: "Feb 22 2023", content: "Paradigm shifts are challenging but necessary!" }
      ]
  },
];

  
  export function sortBlogPosts() {
    blogPosts.sort((a, b) => {
      if (a.views !== b.views) {
        return b.views - a.views;
      }
      // If views are equal, sort by date in descending order
      if (a.date !== b.date) {
        return new Date(b.date) - new Date(a.date);
      }
      // If date is also equal, sort by title in ascending order
      return a.title.localeCompare(b.title);
    });
  }
  
  sortBlogPosts();