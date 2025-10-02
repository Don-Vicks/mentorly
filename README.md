# Mentorly

**Personalized Teaching. On Demand.**

Mentorly is Teaching-as-a-Service: an AI-powered lesson builder, on-demand mentors, adaptive curriculum, dashboards, and a white-label API for schools and tutoring organizations.

## Features

- **AI-Powered Lesson Builder:** Instantly generate lesson plans tailored to goals, age, and skill level. Adjust tone, difficulty, and time-on-task.
- **Human Mentors on Demand:** Book 1:1 or group sessions with vetted educators. Integrated scheduling, messaging, and session notes.
- **Curriculum Intelligence:** Adaptive pathways that respond to progress, strengths, and gaps. Every quiz and worksheet refines the next lesson.
- **Multi-format Content:** Video lessons, interactive quizzes, worksheets, and live sessions in one workflow.
- **Parent & Teacher Dashboards:** Track milestones, attendance, assignments, and growth. Export reports with one click.
- **API for Schools & Tutors:** White-label flows, SSO, and easy LMS integration.

## Who It's For

- **Parents & K-12 Students:** Personalized homework help, targeted practice, and live mentors. Parent summaries after each session.
- **Adult Learners:** Microlearning for upskilling and career transitions. Mentor-led reviews and portfolio-ready projects.
- **Tutors, Educators & Schools:** Deliver services under your brand with white-label flows, SSO, and reporting.

## Dashboards

Monitor progress, attendance, and mastery. Export reports or share with stakeholders. Track streaks, mastery, and session counts.

## API

Embed Mentorly into your LMS in minutes. Provision users, sync rosters, generate lessons, and stream progress to your systems with simple endpoints and SSO.

Example:
```http
POST /v1/lessons
{
	"student_id": "stu_91x8",
	"goal": "Algebra: Quadratic basics",
	"level": "Grade 9",
	"preferences": {
		"length_min": 30,
		"style": ["visual", "problem-first"]
	}
}
```

## Pricing

- **Starter:** Free for individual learners.
- **Pro:** $29/mo for families or serious upskillers.
- **Institution:** Custom pricing for schools and tutoring orgs.

## Getting Started

1. Clone the repo and open `index.html` in your browser.
2. Try building your first lesson or book a demo.
3. For API access, request a sandbox or view the API docs.

## License

© Mentorly, Inc. All rights reserved.