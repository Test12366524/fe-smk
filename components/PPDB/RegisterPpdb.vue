<template>
  <v-card>
    <v-card-text>
      <v-form ref="form" @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="nisn"
              label="NISN"
              :rules="requiredRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="kip"
              label="KIP"
              :rules="requiredRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="kks"
              label="KKS"
              type="number"
              :rules="requiredRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="nik"
              label="NIK"
              type="number"
              :rules="nikRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="name"
              label="Nama"
              :rules="requiredRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="place_of_birth"
              label="Tempat Lahir"
              :rules="requiredRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="birth_date"
              label="Tanggal Lahir"
              type="date"
              :rules="requiredRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-radio-group v-model="gender" row :rules="requiredRules" required>
              <template v-slot:label>
                <div>Gender</div>
              </template>
              <v-radio label="Laki-laki" value="L"></v-radio>
              <v-radio label="Perempuan" value="P"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" lg="6">
            <v-autocomplete
              v-model="religion"
              :items="religions"
              label="Agama"
              :rules="requiredRules"
              required
            />
          </v-col>
          <!-- <v-col cols="12" lg="6">
            <v-text-field
              v-model="entrance_date"
              label="Tanggal Masuk"
              type="date"
              :rules="requiredRules"
              required
            />
          </v-col> -->
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              :rules="emailRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="phone_1"
              label="Telepon 1"
              type="number"
              :rules="requiredRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="phone_2"
              label="Telepon 2 (Optional)"
              type="number"
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="address"
              label="Alamat"
              :rules="requiredRules"
              required
              rows="1"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-autocomplete
              v-model="province_id"
              :items="provinces"
              item-title="text"
              item-value="id"
              label="Provinsi"
              :rules="requiredRules"
              required
              @update:model-value="getCities"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-autocomplete
              v-model="city_id"
              :items="cities"
              item-title="text"
              item-value="id"
              label="Kota/Kabupaten"
              :rules="requiredRules"
              required
              :disabled="!province_id"
              @update:model-value="getDistricts"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-autocomplete
              v-model="district_id"
              :items="districts"
              item-title="text"
              item-value="id"
              label="Kecamatan"
              :rules="requiredRules"
              required
              :disabled="!city_id"
              @update:model-value="getSubdistricts"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-autocomplete
              v-model="subdistrict_id"
              :items="subdistricts"
              item-title="text"
              item-value="id"
              label="Desa/Kelurahan"
              :rules="requiredRules"
              required
              :disabled="!district_id"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="post_code"
              label="Kode Pos"
              type="number"
              :rules="requiredRules"
              required
            />
          </v-col>

          <v-col cols="12" lg="6">
            <v-text-field
              v-model="anak_ke"
              label="Anak Ke"
              type="number"
              :rules="requiredRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="dari_jumlah_anak"
              label="Dari Jumlah Anak"
              type="number"
              :rules="requiredRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="nama_ayah"
              label="Nama Ayah"
              :rules="requiredRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="nama_ibu"
              label="Nama Ibu"
              :rules="requiredRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="pekerjaan_ayah"
              label="Pekerjaan Ayah"
              :rules="requiredRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="pekerjaan_ibu"
              label="Pekerjaan Ibu"
              :rules="requiredRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="nik_ayah"
              label="NIK Ayah"
              type="number"
              :rules="nikRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="nik_ibu"
              label="NIK Ibu"
              type="number"
              :rules="nikRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="no_kk"
              label="No KK"
              type="number"
              :rules="nikRules"
              required
            />
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="asal_sekolah"
              label="Asal Sekolah"
              :rules="requiredRules"
              required
            />
          </v-col>
          <!-- <v-col cols="12" lg="6">
            <v-select
              v-model="tripay_method"
              :items="tripayMethods"
              label="Tripay Method"
              :rules="requiredRules"
              required
            />
          </v-col> -->
        </v-row>
      </v-form>
      <v-btn
        type="submit"
        color="primary"
        width="100%"
        @click="submitForm"
        variant="flat"
        :disabled="isLoading"
      >
        <v-progress-circular
          v-if="isLoading"
          color="#ffffff"
          indeterminate
          :size="20"
          class="mr-2"
        />
        Daftar
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const form = ref(null);
const kip = ref('');
const kks = ref('');
const nik = ref('');
const name = ref('');
const place_of_birth = ref('');
const birth_date = ref('');
const gender = ref('');
const religion = ref('');
const entrance_date = ref('2024-09-09');
const email = ref('');
const phone_1 = ref('');
const phone_2 = ref('');
const province_id = ref('');
const city_id = ref('');
const district_id = ref('');
const subdistrict_id = ref('');
const post_code = ref('');
const address = ref('');
const anak_ke = ref('');
const dari_jumlah_anak = ref('');
const nama_ayah = ref('');
const nama_ibu = ref('');
const pekerjaan_ayah = ref('');
const pekerjaan_ibu = ref('');
const nik_ayah = ref('');
const nik_ibu = ref('');
const no_kk = ref('');
const asal_sekolah = ref('');
const tripay_method = ref(null);
const nisn = ref('');

const requiredRules = [(v) => !!v || 'This field is required'];
const emailRules = [
  (v) => !!v || 'E-mail is required',
  (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];
const nikRules = [
  (v) => !!v || 'This field is required',
  (v) => (v && v.toString().length === 16) || 'NIK/KK must be 16 digits',
];

const religions = [
  'Islam',
  'Katolik',
  'Protestan',
  'Hindu',
  'Budha',
  'Konghucu',
];
const tripayMethods = [
  'PERMATAVA',
  'BNIVA',
  'BRIVA',
  'MANDIRIVA',
  'MUAMALATVA',
  'CIMBVA',
  'OCBCVA',
  'DANAMONVA',
  'OTHERBANKVA',
  'ALFAMART',
  'INDOMARET',
  'ALFAMIDI',
  'OVO',
  'QRIS',
  'QRISC',
  'QRIS2',
  'DANA',
  'SHOPEEPAY',
  'QRIS_SHOPEEPAY',
];

const provinces = ref([
  { id: '11', text: 'Aceh' },
  { id: '12', text: 'Sumatera Utara' },
]);

const cities = ref([
  { id: '1101', text: 'Banda Aceh' },
  { id: '1102', text: 'Savu-Lempeng' },
]);

const districts = ref([
  { id: '110101', text: 'Kuta Alam' },
  { id: '110102', text: 'Kuta Raja' },
]);

const subdistricts = ref([
  { id: '1101012001', text: 'Kuta Barat' },
  { id: '1101012002', text: 'Kuta Timur' },
]);

const { fetchData, createData } = useApi();
const isLoading = ref(false);

const getProvinces = async () => {
  const { data } = await fetchData('/province/all');
  provinces.value = data.data;
  city_id.value = '';
  district_id.value = '';
  subdistrict_id.value = '';
  cities.value = [];
  districts.value = [];
  subdistricts.value = [];
};

const getCities = async (provinceId) => {
  const { data } = await fetchData(`/city/all/${provinceId}`);
  cities.value = data.data;
  district_id.value = '';
  subdistrict_id.value = '';
  districts.value = [];
  subdistricts.value = [];
};

const getDistricts = async (cityId) => {
  const { data } = await fetchData(`/district/all/${cityId}`);
  districts.value = data.data;
  subdistrict_id.value = '';
  subdistricts.value = [];
};

const getSubdistricts = async (districtId) => {
  const { data } = await fetchData(`/subdistrict/all/${districtId}`);
  subdistricts.value = data.data;
};

onMounted(() => {
  getProvinces();
});

const submitForm = async () => {
  const { valid } = await form.value.validate();
  isLoading.value = true;
  if (valid) {
    const formData = {
      kip: kip.value,
      kks: kks.value,
      nik: nik.value,
      name: name.value,
      nisn: nisn.value,
      place_of_birth: place_of_birth.value,
      birth_date: birth_date.value,
      gender: gender.value,
      religion: religion.value,
      entrance_date: entrance_date.value,
      email: email.value,
      phone_1: phone_1.value,
      phone_2: phone_2.value,
      province_id: province_id.value,
      city_id: city_id.value,
      district_id: district_id.value,
      subdistrict_id: subdistrict_id.value,
      post_code: post_code.value,
      address: address.value,
      anak_ke: anak_ke.value,
      dari_jumlah_anak: dari_jumlah_anak.value,
      nama_ayah: nama_ayah.value,
      nama_ibu: nama_ibu.value,
      pekerjaan_ayah: pekerjaan_ayah.value,
      pekerjaan_ibu: pekerjaan_ibu.value,
      nik_ayah: nik_ayah.value,
      nik_ibu: nik_ibu.value,
      no_kk: no_kk.value,
      asal_sekolah: asal_sekolah.value,
      tripay_method: tripay_method.value,
    };

    const { data } = await createData('/ppdb', formData, true);
    isLoading.value = false;
    data && resetForm();
  }
};

const resetForm = () => {
  form.value.reset();
  form.value.resetValidation();
  cities.value = [];
  districts.value = [];
  subdistricts.value = [];
  provinces.value = [];
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
