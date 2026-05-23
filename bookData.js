const books = [
{
title: "1984",
author: "George Orwell",
genre: "Classic Fiction",
image: "Book Files/1984.jpg",
description: "A masterpiece of rebellion and imprisonment where war is peace, freedom is slavery and Big Brother is watching. Thought Police, Big Brother, Orwellian - these words have entered our vocabulary because of George Orwell's classic dystopian novel 1984. The story of one man's Nightmare Odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality. With a foreword by Thomas Pynchon. This beautiful paperback edition features deckled edges and french flaps a perfect gift for any occasion ",
amazon: "https://www.amazon.com/dp/B00A2MTYAI",
pdf: "https://oceanofpdf.com/authors/george-orwell/pdf-epub-1984-download/"
},

{
title: "To Kill a Mockingbird",
author: "Harper Lee",
genre: "Classic Fiction",
image: "Book Files/Mockingbird.jpg",
description: "One of the best-loved stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable coming-of-age tale in a South poisoned by virulent prejudice, it views a world of great beauty and savage iniquities through the eyes of a young girl, as her father — a crusading local lawyer — risks everything to defend a black man unjustly accused of a terrible crime.",
amazon: "https://www.amazon.com/dp/0060935464",
pdf: "https://oceanofpdf.com/authors/harper-lee/pdf-epub-to-kill-a-mockingbird-download/"
},

{
title: "The Great Gatsby",
author: "F. Scott Fitzgerald",
genre: "Classic Fiction",
image: "Book Files/Gatsby.jpg",
description: " The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. First published in 1925, this quintessential novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.",
amazon: "https://www.amazon.com/dp/0743273567",
pdf: "https://oceanofpdf.com/authors/f-scott-fitzgerald/pdf-the-great-gatsby-download/"
},

{
title: "Pride and Prejudice",
author: "Jane Austen",
genre: "Classic Fiction",
image: "Book Files/Pride.jpg",
description: " Pride and Prejudice has charmed generations of readers for more than two centuries. Jane Austen's much-adapted novel is famed for its witty, spirited heroine, sensational romances, and deft remarks on the triumphs and pitfalls of social convention. Author Jane Austen (1775-1817) was an English novelist whose works of social realism achieved unprecedented critical and popular success, though Austen herself remained an anonymous writer throughout her life.",
amazon: "https://www.amazon.com/dp/0141439513",
pdf: "https://oceanofpdf.com/authors/jane-austen/pdf-pride-and-prejudice-download/"
},

{
title: "The Kite Runner",
author: "Khaled Hosseini",
genre: "Classic Fiction",
image: "Book Files/Kite.jpg",
description: "The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father's servant, The Kite Runner is a beautifully crafted novel set in a country that is in the process of being destroyed. It is about the power of reading, the price of betrayal, and the possibility of redemption; and an exploration of the power of fathers over sons—their love, their sacrifices, their lies.A sweeping story of family, love, and friendship told against the devastating backdrop of the history of Afghanistan over the last thirty years, The Kite Runner is an unusual and powerful novel that has become a beloved, one-of-a-kind classic.",
amazon: "https://www.amazon.com/dp/159463193X",
pdf: "https://oceanofpdf.com/authors/khaled-hosseini/pdf-epub-the-kite-runner-download/"
},

{
title: "The Hobbit",
author: "J.R.R. Tolkien",
genre: "Fantasy",
image: "Book Files/Hobbit.jpg",
description: " In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. ",
amazon: "https://www.amazon.com/dp/054792822X",
pdf: "https://oceanofpdf.com/authors/j-r-r-tolkien/pdf-the-hobbit-download/"
},

{
title:"The Handmaid's Tale",
author:"Margaret Atwood",
genre:"Fantasy",
description:"The Handmaid's Tale is an instant classic and eerily prescient cultural phenomenon, from the patron saint of feminist dystopian fiction. The Handmaid's Tale is a novel of such power that the reader will be unable to forget its images and its forecast. Set in the near future, it describes life in what was once the United States and is now called the Republic of Gilead, a monotheocracy that has reacted to social unrest and a sharply declining birthrate by reverting to, and going beyond, the repressive intolerance of the original Puritans. The regime takes the Book of Genesis absolutely at its word, with bizarre consequences for the women and men in its population. The story is told through the eyes of Offred, one of the unfortunate Handmaids under the new social order. In condensed but eloquent prose, by turns cool-eyed, tender, despairing, passionate, and wry, she reveals to us the dark corners behind the establishment’s calm facade, as certain tendencies now in existence are carried to their logical conclusions. The Handmaid's Tale is funny, unexpected, horrifying, and altogether convincing. It is at once scathing satire, dire warning, and a tour de force. It is Margaret Atwood at her best.",
amazon: "https://www.amazon.com/gp/product/1328879941/ref=x_gr_bb_amazon",
pdf: "https://oceanofpdf.com/authors/margaret-atwood/pdf-epub-the-handmaids-tale-the-graphic-novel-by-margaret-atwood-download/",
image: "Book Files/Handmaid.jpg"
},

{
title: "Six of Crows",
author: "Leigh Bardugo",
genre: "Fantasy",
image: "Book Files/Crows.jpg",
description: "Ketterdam: a bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone… A convict with a thirst for revenge, A sharpshooter who can’t walk away from a wager, A runaway with a privileged past, A spy known as the Wraith, A Heartrender using her magic to survive the slums and A thief with a gift for unlikely escapes. Six dangerous outcasts. One impossible heist. Kaz’s crew is the only thing that might stand between the world and destruction—if they don’t kill each other first.",
amazon: "https://www.amazon.com/dp/1627792120",
pdf: "https://oceanofpdf.com/authors/leigh-bardugo/pdf-six-of-crows-download/"
},

{
title: "The Lion, the Witch and the Wardrobe",
author: "C.S. Lewis",
genre: "Fantasy",
image: "Book Files/Narnia.jpg",
description: "They open a door and enter a world NARNIA...the land beyond the wardrobe, the secret country known only to Peter, Susan, Edmund, and Lucy...the place where the adventure begins. Lucy is the first to find the secret of the wardrobe in the professor's mysterious old house. At first, no one believes her when she tells of her adventures in the land of Narnia. But soon Edmund and then Peter and Susan discover the Magic and meet Aslan, the Great Lion, for themselves. In the blink of an eye, their lives are changed forever.",
amazon: "https://www.amazon.com/dp/B000QQKTGI",
pdf: "https://oceanofpdf.com/authors/c-s-lewis/pdf-epub-the-lion-the-witch-and-the-wardrobe-download/"
},

{
title: "The Poppy War",
author: "R.F. Kuang",
genre: "Fantasy",
image: "Book Files/Poppy.jpg",
description: "When Rin aced the Keju—the Empire-wide test to find the most talented youth to learn at the Academies—it was a shock to everyone: to the test officials, who couldn’t believe a war orphan from Rooster Province could pass without cheating; to Rin’s guardians, who believed they’d finally be able to marry her off and further their criminal enterprise; and to Rin herself, who realized she was finally free of the servitude and despair that had made up her daily existence. That she got into Sinegard—the most elite military school in Nikan—was even more surprising. But surprises aren’t always good. Because being a dark-skinned peasant girl from the south is not an easy thing at Sinegard. Targeted from the outset by rival classmates for her color, poverty, and gender, Rin discovers she possesses a lethal, unearthly power—an aptitude for the nearly-mythical art of shamanism. Exploring the depths of her gift with the help of a seemingly insane teacher and psychoactive substances, Rin learns that gods long thought dead are very much alive—and that mastering control over those powers could mean more than just surviving school. For while the Nikara Empire is at peace, the Federation of Mugen still lurks across a narrow sea. The militarily advanced Federation occupied Nikan for decades after the First Poppy War, and only barely lost the continent in the Second. And while most of the people are complacent to go about their lives, a few are aware that a Third Poppy War is just a spark away . . .Rin’s shamanic powers may be the only way to save her people. But as she finds out more about the god that has chosen her, the vengeful Phoenix, she fears that winning the war may cost her humanity . . . and that it may already be too late.",
amazon: "https://www.amazon.com/dp/0062662589",
pdf: "https://oceanofpdf.com/authors/r-f-kuang/pdf-the-poppy-war-download/"
},

{
title:"A Good Girl's Guide to Murder",
author:"Holly Jackson",
genre:"Mystery",
description:" The case is closed. Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. The police know he did it. Everyone in town knows he did it. But having grown up in the same small town that was consumed by the crime, Pippa Fitz-Amobi isn't so sure. When she chooses the case as the topic for her final project, she starts to uncover secrets that someone in town desperately wants to stay hidden. And if the real killer is still out there, how far will they go to keep Pip from the truth…?",
amazon:"https://www.amazon.com/gp/product/1405293187/ref=x_gr_bb_amazon",
pdf: "https://oceanofpdf.com/authors/holly-jackson/pdf-epub-a-good-girls-guide-to-murder-a-good-girls-guide-to-murder-1-download/",
image:"Book Files/Guide.jpg"
},

{
title: "The Silent Patient",
author: "Alex Michaelides",
genre: "Mystery",
image: "Book Files/Silent.jpg",
description: "Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.Alicia’s refusal to talk, or give any kind of explanation, turns a domestic tragedy into something far grander, a mystery that captures the public imagination and casts Alicia into notoriety. The price of her art skyrockets, and she, the silent patient, is hidden away from the tabloids and spotlight at the Grove, a secure forensic unit in North London. Theo Faber is a criminal psychotherapist who has waited a long time for the opportunity to work with Alicia. His determination to get her to talk and unravel the mystery of why she shot her husband takes him down a twisting path into his own motivations–a search for the truth that threatens to consume him….The Silent Patient is a shocking psychological thriller of a woman’s act of violence against her husband–and of the therapist obsessed with uncovering her motive.",
amazon: "https://www.amazon.com/dp/1250301696",
pdf: "https://oceanofpdf.com/authors/alex-michaelides/pdf-the-silent-patient-download/"
},

{
title: "The Inheritance Games",
author: "Jennifer Lynn Barnes",
genre: "Mystery",
image: "Book Files/Inheritance.jpg",
description: "Avery Grambs has a plan for a better future: survive high school, win a scholarship, and get out. But her fortunes change in an instant when billionaire Tobias Hawthorne dies and leaves Avery virtually his entire fortune. The catch? Avery has no idea why — or even who Tobias Hawthorne is.To receive her inheritance, Avery must move into sprawling, secret passage-filled Hawthorne House, where every room bears the old man’s touch — and his love of puzzles, riddles, and codes. Unfortunately for Avery, Hawthorne House is also occupied by the family that Tobias Hawthorne just dispossessed. This includes the four Hawthorne grandsons: dangerous, magnetic, brilliant boys who grew up with every expectation that one day, they would inherit billions. Heir apparent Grayson Hawthorne is convinced that Avery must be a conwoman, and he’s determined to take her down. His brother, Jameson, views her as their grandfather’s last hurrah: a twisted riddle, a puzzle to be solved. Caught in a world of wealth and privilege, with danger around every turn, Avery will have to play the game herself just to survive.",
amazon: "https://www.amazon.com/dp/1368052401",
pdf: "https://oceanofpdf.com/authors/jennifer-lynn-barnes/pdf-the-inheritance-games-download/"
},

{
title: "One of Us Is Lying",
author: "Karen M. McManus",
genre: "Mystery",
image: "Book Files/Lying.jpg",
description: "Pay close attention and you might solve this.On Monday afternoon, five students at Bayview High walk into detention. Bronwyn, the brain, is Yale-bound and never breaks a rule. Addy, the beauty, is the picture-perfect homecoming princess. Nate, the criminal, is already on probation for dealing. Cooper, the athlete, is the all-star baseball pitcher. And Simon, the outcast, is the creator of Bayview High’s notorious gossip app.Only, Simon never makes it out of that classroom. Before the end of detention Simon’s dead. And according to investigators, his death wasn’t an accident. On Monday, he died. But on Tuesday, he’d planned to post juicy reveals about all four of his high-profile classmates, which makes all four of them suspects in his murder. Or are they the perfect patsies for a killer who’s still on the loose?Everyone has secrets, right? What really matters is how far you would go to protect them. ",
amazon: "https://www.amazon.com/dp/0593565371",
pdf: "https://oceanofpdf.com/authors/karen-m-mcmanus/pdf-one-of-us-is-lying-download/"
},

{
title: "And Then There Were None",
author: "Agatha Christie",
genre: "Mystery",
image: "Book Files/None.jpg",
description: "First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common, we find out, is a wicked past they're unwilling to reveal—and a secret that will seal their fate. For each has been marked for murder. A famous nursery rhyme is framed and hung in every room of the mansion: Ten little boys went out to dine; One choked his little self and then there were nine. Nine little boys sat up very late; One overslept himself and then there were eight. Eight little boys traveling in Devon; One said he'd stay there then there were seven. Seven little boys chopping up sticks; One chopped himself in half and then there were six. Six little boys playing with a hive; A bumblebee stung one and then there were five. Five little boys going in for law; One got into Chancery and then there were four. Four little boys going out to sea; A red herring swallowed one and then there were three. Three little boys walking in the zoo; A big bear hugged one and then there were two. Two little boys sitting in the sun; One got frizzled up and then there was one. One little boy left all alone; He went out and hanged himself and then there were none. When they realize that murders are occurring as described in the rhyme, terror mounts. One by one they fall prey. Who has choreographed this dastardly scheme? And who will be left to tell the tale? Only the dead are above suspicion.",
amazon: "https://www.amazon.com/dp/0312330871",
pdf: "https://oceanofpdf.com/authors/agatha-christie/pdf-and-then-there-were-none-download/"
},

{
title: "The Hunger Games",
author: "Suzanne Collins",
genre: "Dystopian",
image: "Book Files/Hunger.jpg",
description: "Winning means fame and fortune. Losing means certain death. The Hunger Games have begun. . . .In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before-and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weigh survival against humanity and life against love.",
amazon: "https://www.amazon.com/dp/0439023483",
pdf: "https://oceanofpdf.com/authors/suzanne-collins/pdf-the-hunger-games-download/"
},

{
title: "Catching Fire",
author: "Suzanne Collins",
genre: "Dystopian",
image: "Book Files/Fire.jpg",
description: "Sparks are igniting. Flames are spreading. And the Capitol wants revenge. Against all odds, Katniss has won the Hunger Games. She and fellow District 12 tribute Peeta Mellark are miraculously still alive. Katniss should be relieved, happy even. After all, she has returned to her family and her longtime friend, Gale. Yet nothing is the way Katniss wishes it to be. Gale holds her at an icy distance. Peeta has turned his back on her completely. And there are whispers of a rebellion against the Capitol – a rebellion that Katniss and Peeta may have helped create. Much to her shock, Katniss has fueled an unrest she’s afraid she cannot stop. And what scares her even more is that she’s not entirely convinced she should try. As time draws near for Katniss and Peeta to visit the districts on the Capitol’s cruel Victory Tour, the stakes are higher than ever. If they can’t prove, without a shadow of a doubt, that they are lost in their love for each other, the consequences will be horrifying.",
amazon: "https://www.amazon.com/dp/0439023491",
pdf: "https://oceanofpdf.com/authors/suzanne-collins/pdf-catching-fire-download/"
},

{
title: "Mockingjay",
author: "Suzanne Collins",
genre: "Dystopian",
image: "Book Files/Mockingjay.jpg",
description: "My name is Katniss Everdeen. Why am I not dead? I should be dead. Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. Gale has escaped. Katniss’s family is safe. Peeta has been captured by the Capitol. District 13 really does exist. There are rebels. There are new leaders. A revolution is unfolding. It is by design that Katniss was rescued from the arena in the cruel and haunting Quarter Quell, and it is by design that she has long been part of the revolution without knowing it. District 13 has come out of the shadows and is plotting to overthrow the Capitol. Everyone, it seems, has had a hand in the carefully laid plans–except Katniss. The success of the rebellion hinges on Katniss’s willingness to be a pawn, to accept responsibility for countless lives, and to change the course of the future of Panem. To do this, she must put aside her feelings of anger and distrust. She must become the rebels’ Mockingjay–no matter what the personal cost.",
amazon: "https://www.amazon.com/dp/0439023513",
pdf: "https://oceanofpdf.com/authors/suzanne-collins/pdf-mockingjay-download/"
},

{
title:"The Ballad of Songbirds and Snakes",
author:"Suzanne Collins",
genre:"Dystopian",
description: "Ambition will fuel him. Competition will drive him. But power has its price. It is the morning of the reaping that will kick off the tenth annual Hunger Games. In the Capitol, eighteen-year-old Coriolanus Snow is preparing for his one shot at glory as a mentor in the Games. The once-mighty house of Snow has fallen on hard times, its fate hanging on the slender chance that Coriolanus will be able to outcharm, outwit, and outmaneuver his fellow students to mentor the winning tribute.The odds are against him. He's been given the humiliating assignment of mentoring the female tribute from District 12, the lowest of the low. Their fates are now completely intertwined -- every choice Coriolanus makes could lead to favor or failure, triumph or ruin. Inside the arena, it will be a fight to the death. Outside the arena, Coriolanus starts to feel for his doomed tribute... and must weigh his need to follow the rules against his desire to survive no matter what it takes.",
amazon: "https://www.amazon.com/Ballad-Songbirds-Snakes-Hunger-Games/dp/1339016583",
pdf: "https://oceanofpdf.com/authors/suzanne-collins/pdf-epub-the-ballad-of-songbirds-and-snakes-the-hunger-games-0-download-68082320023/",
image: "Book Files/Snakes.jpg"
},

{
title:"Sunrise on the Reaping",
author:"Suzanne Collins",
genre:"Dystopian",
description:"When you've been set up to lose everything you love, what is there left to fight for?As the day dawns on the fiftieth annual Hunger Games, fear grips the districts of Panem. This year, in honor of the Quarter Quell, twice as many tributes will be taken from their homes.Back in District 12, Haymitch Abernathy is trying not to think too hard about his chances. All he cares about is making it through the day and being with the girl he loves.When Haymitch’s name is called, he can feel all his dreams break. He’s torn from his family and his love, shuttled to the Capitol with the three other District 12 tributes: a young friend who’s nearly a sister to him, a compulsive oddsmaker, and the most stuck-up girl in town.As the Games begin, Haymitch understands he’s been set up to fail. But there’s something in him that wants to fight . . . and have that fight reverberate far beyond the deadly arena.",
amazon: "https://www.amazon.com/gp/product/1546171460",
pdf: "https://oceanofpdf.com/authors/suzanne-collins/pdf-epub-sunrise-on-the-reaping-the-hunger-games-0-5-download/",
image: "Book Files/Sunrise.jpg"
},

];