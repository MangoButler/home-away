import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createPropertyAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import PriceInput from "@/components/form/PriceInput";

function CreatePropertyPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        create property
      </h1>
      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (Max 20 Characters)"
              defaultValue="New Property"
            />
            <FormInput
              name="name"
              type="text"
              label="Tagline (Max 30 Characters)"
              defaultValue="Dream Getaway awaits you here!"
            />
            <PriceInput />
            {/* category */}
          </div>
          {/* textarea / description Input*/}
          <SubmitButton text="create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreatePropertyPage;
