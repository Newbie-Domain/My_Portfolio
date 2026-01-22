

import React from 'react';

const Skills = () =>{

    const skills = [
        'Java', 'Spring Boot', 'React.js', 'HTML5', 'CSS3', 'JavaScript', 'Git', 'SQL', 'RESTful APIs', 'Agile Methodologies', 'Hibernate', 
    ]

    return(
       <section id="skills" style={{background: '#f4f4f4'}} >

        <div className='container'>
            <h2>Skills</h2>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'center'}} >
                {
                    skills.map((skill, index) => (
                        <div key={index} style={{background:'#fff', padding : '10px 20px ', margin : '10px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'}} >
                            {skill}

 
                        </div>
                    ))
                }

            </div>
        </div>



       </section>
    )
}

export default Skills;