var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Thanks to all my students  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "How Do Statisticians Solve Problems with Data?",
  "body": " How Do Statisticians Solve Problems with Data?  When statisticians try to answer questions using data, they follow a process with four key steps. It’s not always a straight line—they often go back and forth between steps—but here’s how it works:     Formulate a Good Question. Every investigation starts with a question. But not just any question—a statistical question. That means it’s a question that we can answer with data and that expects answers that are not always definitive. For example, “What is the average number of texts high school students send each day?” is a statistical question because the number will vary from person to person.     Collect (or Find) the Right Data. Once we have a statistical question, we need data to answer it. That might mean planning a survey or experiment, or it might mean finding data someone else already collected. Either way, we need to think about how to get data that really fits the question. We also need to check that the data makes sense and is good quality before using it.     Analyze the Data. Now it’s time to look for patterns in the data. This could mean making graphs, calculating averages or proportions, or comparing groups. We always choose the methods that help us see what’s going on in the data and help us answer our statistical question.     Make Sense of the Results. After we’ve analyzed the data, we need to explain what we found. What does the data say about our original question? Are there any surprises? What conclusions can we draw—and how sure are we about our conclusions?    This four-step process Formulate , Collect , Analyze , Interpret is how statisticians (and you!) can use data to explore the world and make decisions. Here is how the GAISE II outlines the four-step process:   Statistical Problem-Solving Process      Formulate Statistical Investigative Questions     Clarify the problem at hand: Understand the context and define what needs to be learned or solved.    Formulate questions that can be answered with data: Pose statistical questions that anticipate variability and require data to answer (not just facts or calculations).       Collect\/Consider the Data     Design a plan: Develop a strategy to collect new data or identify existing, relevant data.    Collect the data (if needed): Carry out the data collection according to the plan.    Interrogate the data: Evaluate the data’s quality, context, and structure before moving forward.       Analyze the Data     Select appropriate methods: Choose graphical and numerical tools suitable for the type of data and the investigative questions.   Use these methods to analyze the data: Apply tools to describe patterns, compare groups, or explore associations and trends.        Interpret the Results     Interpret the analysis: Draw conclusions based on the analysis and acknowledge uncertainty or variability.    Relate to the original question: Connect findings back to the investigative question and the real-world context.        The Statistical Problem-Solving Process involes four steps: Formulate, Collect, Analyze, and Interpret   GAISE II Statistical Problem-Solving Process   "
},
{
  "id": "Framework01",
  "level": "2",
  "url": "sec-section-name.html#Framework01",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": "  The Statistical Problem-Solving Process involes four steps: Formulate, Collect, Analyze, and Interpret   GAISE II Statistical Problem-Solving Process  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
