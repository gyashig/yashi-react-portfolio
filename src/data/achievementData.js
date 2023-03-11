import cloud from '../assets/svg/achievements/cloud-computing-google.jpg'
import hacktober from '../assets/svg/achievements/hacktober.png'

import innovation from '../assets/svg/achievements/innovation.png'
export const achievementData = {
    bio : "Putting quantified achievements on a resume is great, but I just don’t work with hard numbers. I have no data to support the quality of my work. If you have lots of relevant experience, the heading statement of your resume will be a summary.",
    achievements : [
        {
            id : 1,
            title : 'Chief Executive Officer',
            details : 'Innovation Drillers is an organization in Lpu coming under E-Cell. I handle all the operations of this organization.',
            date : '2022- Present',
            field : 'Entrepreneurship',
            image :innovation
        },
        {
            id : 2,
            title : 'Google Cloud  Facilator Program',
            details : 'Validate technical skills and cloud expertise to grow your career and business.',
            date : 'April 2022',
            field : 'Cloud Computing',
            image : cloud
        },
        {
            id : 3,
            title : 'Hacktoberfest 2022',
            details : 'Professional Data Engineers enable data-driven decision making by collecting, transforming, and publishing data.',
            date : 'Oct 31, 2022',
            field : 'Open Source Contribution',
            image : hacktober
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/