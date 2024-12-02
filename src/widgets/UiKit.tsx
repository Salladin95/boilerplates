import { Button, FormField, FormFieldWithLabel, Input } from '~/shared/ui'

export function UiKit() {
	return (
		<div>
			<section className="w-full mb-4">
				<h1 className="text-center">Buttons</h1>
				<div className="w-full flex-center gap-4">
					<Button>Primary</Button>
					<Button variant={'secondary'}>Secondary</Button>
					<Button variant={'none'}>None</Button>
					<SearchButton />
					<AddButton />
					<CalendarButton />
				</div>
			</section>
			<section className="w-md mx-auto">
				<h1 className="text-center">Inputs</h1>
				<div className="w-full flex-center flex-col gap-4">
					<Input />
					<Input error />
					<FormField error='Sth went wrong'>
						<Input />
					</FormField>
					<FormFieldWithLabel label='Here we go'>
						<Input />
					</FormFieldWithLabel>
				</div>
			</section>
		</div>
	)
}
