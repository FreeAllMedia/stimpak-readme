import inflect from "jargon";
import StimpakQuotes from "stimpak-quotes";

export default class StimpakReadme {
	constructor(stimpak) {
		stimpak
			.use(StimpakQuotes)
			.source("**/*")
				.directory(`${__dirname}/templates`)
			.prompt({
				type: "input",
				name: "projectName",
				message: "What is the project name?",
				default: "example-name"
			}, {
				type: "input",
				name: "projectDescription",
				message: "How would you describe the project?",
				default: "I don't really know how to describe it!"
			})
			.then((stimpak, done) => {
				const answers = stimpak.answers();
				const projectNameTitleCase = inflect(answers.projectName).title.toString();

				stimpak.answers({
					projectNameTitleCase
				});

				done();
			}).
			then((stimpak, done) => {
				stimpak.quote();
				done();
			});
	}
}
