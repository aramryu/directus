export function formatFieldName(tempstring: string) {
	var fallback = tempstring;
	if (tempstring.startsWith("Gm ")) {
		fallback = tempstring.replace("Gm ", "");
	}
	if (tempstring.startsWith("Tr ")) {
		fallback = tempstring.replace("Tr ", "");
	}
	if (tempstring.startsWith("Rl ")) {
		fallback = tempstring.replace("Rl ", "");
	}
	if (tempstring.startsWith("Sa ")) {
		fallback = tempstring.replace("Sa ", "");
	}
	if (tempstring.startsWith("St ")) {
		fallback = tempstring.replace("St ", "");
	}
	if (tempstring.startsWith("Dc ")) {
		fallback = tempstring.replace("Dc ", "");
	}
	if (tempstring.startsWith("De ")) {
		fallback = tempstring.replace("De ", "");
	}
	if (tempstring.startsWith("Ln ")) {
		fallback = tempstring.replace("Ln ", "");
	}
	if (tempstring.startsWith("Sy ")) {
		fallback = tempstring.replace("Sy ", "");
	}
	if (tempstring.startsWith("As ")) {
		fallback = tempstring.replace("As ", "");
	}
	if (tempstring.startsWith("Co ")) {
		fallback = tempstring.replace("Co ", "");
	}
	if (tempstring.startsWith("Pl ")) {
		fallback = tempstring.replace("Pl ", "");
	}
	if (tempstring.startsWith("Li ")) {
		fallback = tempstring.replace("Li ", "");
	}
	if (tempstring.startsWith("Vs ")) {
		fallback = tempstring.replace("Vs ", "");
	}

	return fallback;

}
